"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const userdb_1 = require("./DATABASE/userdb");
const content_1 = require("./DATABASE/content");
const config_1 = require("./config");
mongoose_1.default.connect("mongodb+srv://web_03:FRthIjOygqK2kDSg@cluster0.mhrgupg.mongodb.net/secondbrain");
const middleware_1 = require("./middleware");
const link_1 = require("./DATABASE/link");
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.post("/api/v1/signup", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body.username;
        const password = req.body.password;
        try {
            yield userdb_1.UserModel.create({
                username: user,
                password: password
            });
            res.status(200).json({
                message: "signup"
            });
        }
        catch (e) {
            res.status(411).json({
                message: "invalid input"
            });
        }
    });
});
app.post("/api/v1/signin", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.body.username;
        const password = req.body.password;
        try {
            const response = yield userdb_1.UserModel.findOne({
                username: user,
                password: password,
            });
            if (response) {
                const token = jsonwebtoken_1.default.sign({
                    id: response._id.toString()
                }, config_1.jwt_secret);
                res.status(200).json({
                    token
                });
            }
            else {
                res.status(500).json({
                    message: "error"
                });
            }
        }
        catch (e) {
            res.status(500).json({
                message: "error while singing up"
            });
        }
    });
});
app.post("/api/v1/content", middleware_1.UserMiddelware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const title = req.body.title;
    yield content_1.contentModel.create({
        link: link,
        title: title,
        type: req.body.type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });
    res.json({
        message: "Content added"
    });
}));
app.get("/api/v1/brain/content", middleware_1.UserMiddelware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const UserID = req.userId;
    const content = yield content_1.contentModel.find({
        userId: UserID
    }).populate("userId", "username");
    res.json({
        content
    });
}));
app.post("/api/v1/brain/share", middleware_1.UserMiddelware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.body.share;
    if (share) {
        const existingLink = yield link_1.LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = (0, utils_1.random)(10);
        yield link_1.LinkModel.create({
            // @ts-ignore
            userId: req.userId,
            hash: hash
        });
        res.json({
            hash
        });
    }
    else {
        yield link_1.LinkModel.deleteOne({
            //  @ts-ignore
            userId: req.userid
        });
        res.json({
            message: "Removed link"
        });
    }
}));
app.get("/api/v1/brain/:shareLink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.shareLink;
    const link = yield link_1.LinkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            message: "sorry incorrect input"
        });
        return; //if i do not write then in async(req,res ) give error
    }
    const content = yield content_1.contentModel.find({
        userId: link.userId
    });
    const user = yield userdb_1.UserModel.findOne({
        _id: link.userId
    });
    res.json({
        username: user === null || user === void 0 ? void 0 : user.username,
        contents: content
    });
}));
app.listen(3000);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dataConnection = (dataUrl) => {
    mongoose_1.default.set('strictQuery', false);
    return mongoose_1.default.connect(dataUrl);
};
exports.dataConnection = dataConnection;

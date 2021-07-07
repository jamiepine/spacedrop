"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
var glasstron_1 = require("glasstron");
var path_1 = __importDefault(require("path"));
(_a = electron_1.app.dock) === null || _a === void 0 ? void 0 : _a.hide();
var mainWindow;
function createWindow() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, installDevtools, REACT_DEVELOPER_TOOLS;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    (_a = electron_1.app.dock) === null || _a === void 0 ? void 0 : _a.hide();
                    mainWindow = new glasstron_1.BrowserWindow({
                        width: 583,
                        height: 352,
                        minWidth: 300,
                        minHeight: 410,
                        backgroundColor: '#00000000',
                        transparent: true,
                        frame: false,
                        blur: true,
                        icon: path_1.default.join(__dirname, './assets', 'app.icns'),
                        blurType: 'blurbehind',
                        blurGnomeSigma: 100,
                        blurCornerRadius: 40,
                        vibrancy: 'fullscreen-ui',
                        show: false,
                        skipTaskbar: true
                    });
                    (_b = electron_1.app.dock) === null || _b === void 0 ? void 0 : _b.hide();
                    if (!electron_is_dev_1.default) return [3 /*break*/, 3];
                    mainWindow.loadURL('http://localhost:3000/index.html');
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('electron-devtools-installer')); })];
                case 1:
                    _c = _d.sent(), installDevtools = _c.default, REACT_DEVELOPER_TOOLS = _c.REACT_DEVELOPER_TOOLS;
                    return [4 /*yield*/, installDevtools(REACT_DEVELOPER_TOOLS)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    mainWindow.loadURL("file://" + __dirname + "/../index.html");
                    _d.label = 4;
                case 4:
                    mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
                    return [2 /*return*/];
            }
        });
    });
}
var keybind = 'Control+Space';
electron_1.app.on('ready', function () {
    var ret = electron_1.globalShortcut.register(keybind, function () { return __awaiter(void 0, void 0, void 0, function () {
        var focused, visible;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!mainWindow || mainWindow.isDestroyed())) return [3 /*break*/, 2];
                    return [4 /*yield*/, createWindow()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    focused = glasstron_1.BrowserWindow.getFocusedWindow() === mainWindow;
                    visible = mainWindow.isVisible();
                    if (visible && focused)
                        mainWindow.hide();
                    else
                        mainWindow.show();
                    return [2 /*return*/];
            }
        });
    }); });
    if (!ret)
        console.log('registration failed');
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});

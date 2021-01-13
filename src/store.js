/**
 * [task_local]
 0 9,12,18 * * * https://raw.githubusercontent.com/jxmyh99/wlvue/master/src/store.js, tag=互助码提交, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxnc.png, enabled=true
 */
const $ = new Env('互助码提交');
// 京喜工厂
const jdFactoryUrl = 'http://api.turinglabs.net/api/v1/jd/jxfactory/create/互助码/'
const jdFactoryShareCode = [
    "8JyxKgsHRRB1j7GBkLOoJQ==",
    "AbB6wjBQfPYYgF6DbE28RA==",
    "tIWJQpzcZATpSeNiICwlzg==",
    "29keVivQnYUdyPK8jA8TZw==",
    "DT3bL110KSi9NGRHFdOe2Q==",
    "5InlHCOpavz0B72RXtcJ2Q==",
    "zoP4S11JA583B1-va6g3bg==",
    "DLbigFE6hfHOxrxTOxdROQ==",
];
// 东东工厂
const ddFactoryUrl = 'http://api.turinglabs.net/api/v1/jd/ddfactory/create/互助码/'
const ddFactoryShareCode = [
        "P04z54XCjVWnYaS5m9AVSmg1HU",
        "P04z54XCjVWnYaS5m9cZ2Wt2ntJwNMU7QLwKkM",
        "P04z54XCjVWnYaS5mZQWT6vlyRLlYri",
        "P04z54XCjVWnYaS5m9cZxSMmTki9KO6PDItWQ",
        "P04z54XCjVWnYaS5mJKXTWmgj4b",
        "T015a3nXlaiFIOJLU0kCjVWnYaS5kRrbA",
        "T018v_h6RhYc8VXeKRub1ACjVWnYaS5kRrbA",
        "T0159K4gQRcQ9FXWIhkCjVWnYaS5kRrbA",
        "T0225KkcRx9Pp1LUckzzk6IMfQCjVWnYaS5kRrbA",
    ]
    // 种豆
const jdBeanUrl = 'http://api.turinglabs.net/api/v1/jd/bean/create/互助码/'
const jdBeanShareCode = [
        "ep4bsdx3ajfgurgprhz6mvimg4",
        "mlrdw3aw26j3wamoevyeorygfqzipvemzl6gmfy",
        "mzwyl2w2yxawjlkiowimkr76bi",
        "ebxm5lgxoknqd54utd25cbleekis3qopwfs3qda",
        "mqidctphdbwsfjtcdsa3xwgcdu",
        "upuv63aorx3ppsjgtteffn6g4u",
        "dcabav3er4s6se3dm5wl5ffvbu3h7wlwy7o5jii",
        "q3rtq2bjieodyoqcuksu3wql2a",
        "4npkonnsy7xi2rdd24t2sv7u75i3sfule66e6ia",
        "c7c96367d8c8465bb8a4b15b786189e1"
    ]
    // 东东农场 
const jdFarmUrl = 'http://api.turinglabs.net/api/v1/jd/farm/create/互助码/'
const jdFarmShareCode = [
        "1891ed41ee9e44b4912cf4e1d81bb5f7",
        "a59e66b049ef4f17bf4ed5ca5ebbfc7f",
        "9ece5723733d402cae7d729b1a6b5d82",
        "1c0b6bf54a0c4f4d98bc9157e1a09e5c",
        "fd4094e16fb94534be44a59d087d0c56",
        "fd7ed8f1c3c24b61b6a14e6822975ce0",
        "b8fb73f07d2c45728d3b1c3d9f25aa2c",
        "d5efca1bd5a940aead7bdf395bcfc479",
        "c7c96367d8c8465bb8a4b15b786189e1"
    ]
    // 萌宠 
const jdPetUrl = 'http://api.turinglabs.net/api/v1/jd/pet/create/互助码/'
const jdPetShareCode = [
        "MTE1NDUwMTI0MDAwMDAwMDM2NjA5NTYx",
        "TE1NDUyMjEwMDAwMDAwNDAyMzU1MDc=",
        "MTE1NDQ5MzYwMDAwMDAwMzY5ODgzNDM=",
        "MTE1NDAxNzcwMDAwMDAwMzY5NjkzNjM=",
        "MTE1NDUwMTI0MDAwMDAwMDQyMzAyODYz",
        "MTEzMzI0OTE0NTAwMDAwMDA0MzMxNTg0OQ==",
        "MTE1NDQ5MzYwMDAwMDAwNDMzMTU5MDc=",
        "MTE1NDAxNzcwMDAwMDAwMzYzOTY2MzE=",
    ]
    // 赚赚
const jdZZUrl = 'https://code.chiang.fun/api/v1/jd/jdzz/create/互助码/'
const jdZZShareCode = [
    "AUX0L1vWZxA",
    "AUWE5mviXyjZdW2esiSoYwQ",
    "AWG0HwfralTQIDWU",
    "AUWE569nUiF1pSQeJjCoO",
    "AXHcDyvPPj2Q",
    "S5KkcNGpdsDy2YX2FxaFO",
    "Sa3nXlaiFIOJLU0k",
    "Sv_h6RhYc8VXeKRub1A",
    "S9K4gQRcQ9FXWIhk",
    "S5KkcRx9Pp1LUckzzk6IMfQ",
]
$.result = [];


!(async() => {
    $.log(`\n京喜工厂`);
    $.result.push(`\n京喜工厂`);
    await bowerTask(jdFactoryUrl, jdFactoryShareCode)
    $.result.push(`\n京喜工厂结束`);
    $.log(`\n京喜工厂结束`);
    await $.wait(500);
    $.log(`\n种豆得豆`);
    $.result.push(`\n种豆得豆`);

    await bowerTask(jdBeanUrl, jdBeanShareCode)
    $.result.push(`\n种豆得豆结束`);
    $.log(`\n种豆得豆结束`);
    await $.wait(500);
    $.log(`\n东东农场`);
    $.result.push(`\n东东农场`);
    await bowerTask(jdFarmUrl, jdFarmShareCode)
    $.result.push(`\n东东农场结束`);
    $.log(`\n东东农场结束`);
    await $.wait(500);
    $.log(`\n萌宠`);
    $.result.push(`\n萌宠`);
    await bowerTask(jdPetUrl, jdPetShareCode)
    $.result.push(`\n萌宠结束`)
    $.log(`\n萌宠结束`)
    await $.wait(500);
    $.log(`\n赚赚`);
    $.result.push(`\n赚赚`);
    await bowerTask(jdZZUrl, jdZZShareCode)
    $.result.push(`\n赚赚结束`)
    $.log(`\n赚赚结束`)
    await showMsg();
})()
.catch(e => $.logErr(e))
    .finally(() => $.done());

function bowerTask(url, shareCode) {
    return new Promise(async resolve => {
        for (let i = 0; i < shareCode.length; i++) {
            const task = shareCode[i];
            $.log(`\n开始第${ i + 1 }个互助码`);
            await submit({
                url: url.replace('互助码', shareCode[i]),
                shareCode: shareCode[i]
            });
            $.log(`\n第${ i + 1 }个互助码  提交结束`);
        }
        resolve(true);
    })
}

function submit(obj) {
    return new Promise(resolve => {
        $.log(`\n你的互助码: ${ obj.shareCode }`);
        let timer = setTimeout(res => {
            $.result.push(`${obj.shareCode}【邀请码】提交超时！`);
            $.logErr(`${obj.shareCode}【邀请码】提交超时！`)
            timer = null;
            clearTimeout(timer);
            resolve(true)
        }, 5000)
        $.get({
                url: `${ obj.url }`,
            },
            (err, resp, _data) => {
                try {

                    if (err) {
                        $.logErr("提交失败", JSON.stringify(err))
                        $.result.push(`${obj.shareCode}【邀请码】${JSON.stringify(err)}！`);
                        timer = null;
                        clearTimeout(timer);
                        resolve();
                        return;
                    }
                    const { code, message } = JSON.parse(_data);
                    timer = null;
                    clearTimeout(timer);
                    // $.log(`\n邀请码提交： ${ obj.shareCode }\n${ $.showLog ? message : '' }`);
                    if (code == 200) {
                        $.result.push(`${obj.shareCode}【邀请码】提交成功！`);
                        $.log(`${obj.shareCode}【邀请码】提交成功！`)
                    } else if (code == 400 && message.indexOf('share code existed') > -1) {
                        $.result.push(`${obj.shareCode}【邀请码】已经提交过！`);
                        $.logErr(`${obj.shareCode}【邀请码】已经提交过！`)
                    }
                    resolve(true)

                } catch (e) {
                    timer = null;
                    clearTimeout(timer);
                    $.logErr(e, resp);
                    $.result.push(`${obj.shareCode}【邀请码】提交${e}`);
                } finally {
                    timer = null;
                    clearTimeout(timer);
                    resolve();
                }
            },
        );
    });
}

async function showMsg() {
    if ($.errorMsg) return
    if ($.isNode()) {
        await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName}`, `账号${$.index}：${$.nickName || $.UserName}\n昨日收入：${$.incomeBean}京豆 🐶\n昨日支出：${$.expenseBean}京豆 🐶\n当前京豆：${$.beanCount}京豆 🐶${$.message}`, { url: `https://bean.m.jd.com/bean/signIndex.actionbeanDetail/index.action?resourceValue=bean` })
    }
    $.msg($.name, '', `${$.result.join("\n")}`, { "open-url": "https://bean.m.jd.com/bean/signIndex.actionbeanDetail/index.action?resourceValue=bean" });
}



// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) { this.env = t }
        send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) }
        get(t) { return this.send.call(this.env, t) }
        post(t) { return this.send.call(this.env, t, "POST") }
    }
    return new class {
        constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) }
        isNode() { return "undefined" != typeof module && !!module.exports }
        isQuanX() { return "undefined" != typeof $task }
        isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon }
        isLoon() { return "undefined" != typeof $loon }
        toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } }
        toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try { s = JSON.parse(this.getdata(t)) } catch {}
            return s
        }
        setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } }
        getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) { e = "" }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null }
        setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null }
        initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => {!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) { this.logErr(t) }
            }).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => {
                const { message: s, response: i } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => {!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const { url: s, ...i } = t;
                this.got.post(s, i).then(t => {
                    const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                    e(null, { status: s, statusCode: i, headers: r, body: o }, o)
                }, t => {
                    const { message: s, response: i } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return { openUrl: e, mediaUrl: s }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return { "open-url": e, "media-url": s }
                    }
                    if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) { return new Promise(e => setTimeout(e, t)) }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}

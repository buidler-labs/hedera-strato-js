"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_js=self.webpackChunk_buidlerlabs_hedera_strato_js||[]).push([[514],{4735:(e,n,r)=>{r.d(n,{Z:()=>M});var t=r(87462),o=r(63366),i=r(67294),a=r(52263);const l="playgroundContainer_ieNX",s="playgroundHeader_mY9y",g="playgroundRunButton_owO7",c="playgroundEditor_W0Vb",u="playgroundPreview_P371",d="playgroundLogsContainer_a4Hf",m="playgroundLogItem__JjO",v="internal_N1aG",f="userInput_s021";var p=r(15861),_=r(87757),E=r.n(_),L=r(50776),y=r(29548),h=r(91262),S=r(97762);function b(){return i.createElement("div",null,"Loading...")}var C=function(e){var n=e.isRunning,r=i.useContext(L.L2),t=i.useState(),o=t[0],a=t[1],l=r.element;return i.useEffect((function(){var e=l?(0,S.renderToString)(i.createElement(l,null)):null;e&&a(e)}),[r]),n?l?i.createElement("div",{className:u},i.createElement(l,null)):null:o?i.createElement("div",{className:u},i.createElement("div",{dangerouslySetInnerHTML:{__html:o}})):null},w=function(e){var n=e.error,r=e.errorCallback,t=i.useContext(L.L2);return i.useEffect((function(){t.error&&r(t.error)}),[t]),n?i.createElement("pre",{style:{color:"red"}},n):null};const k=function(e){var n=e.isRunning,r=e.error,t=e.errorCallback;return i.createElement("div",null,i.createElement(h.Z,{fallback:i.createElement(b,null)},(function(){return i.createElement(i.Fragment,null,i.createElement(C,{isRunning:n}),i.createElement(w,{error:r,errorCallback:t}))})))};var N=r(95999),Z=r(72389),x=r(86010);function R(e){var n=e.onChange,r=e.disabled,t=(0,Z.Z)();return i.createElement(L.uz,{key:t,className:c,onChange:n,disabled:r})}function T(e){var n=e.children;return i.createElement("div",{className:(0,x.Z)(s)},n)}const H=function(e){var n=e.isRunning,r=e.onRunAction,t=e.onChange,o=e.disabled;return i.createElement(i.Fragment,null,i.createElement(T,null,i.createElement(N.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),i.createElement(R,{onChange:t,disabled:n}),i.createElement(T,null,i.createElement("button",{className:g,onClick:r,disabled:o||n},"RUN")))};var A=["hasTopPosition"];const K=function(e){var n=e.hasTopPosition,r=(0,o.Z)(e,A),a=[{name:"editor",Component:H,props:r},{name:"result",Component:k,props:r}];return(n?a.reverse():a).map((function(e){var n=e.Component,r=e.props,o=e.name;return i.createElement(n,(0,t.Z)({key:o+"-container"},r))}))},P="loadingSpinner_T6zK";const B=function(){return i.createElement("div",{className:P},i.createElement("div",null),i.createElement("div",null),i.createElement("div",null))};var j=["children","playgroundPosition"],I=new(function(){function e(){this._events={}}var n=e.prototype;return n.on=function(e,n){this._events[e]||(this._events[e]=[]),this._events[e].push(n)},n.removeListener=function(e){this._events[e]=null},n.emit=function(e,n){if(!this._events[e])throw new Error("Can't emit an event. Event \""+e+"\" doesn't exits.");this._events[e].forEach((function(e){e(n)}))},e}());const O=function(e){var n=e.children,r=e.playgroundPosition,a=(0,o.Z)(e,j),l=i.useState(!0),s=l[0],g=l[1],c=i.useState(n),u=c[0],_=c[1],h=i.useState(!1),S=h[0],b=h[1],C=i.useState(null),w=C[0],k=C[1],N=i.useRef(!1),Z=(0,y.pJ)(),R={Loader:B,liveEventEmitter:I},T=function(e){e===a.containerKey&&k(null),b(e===a.containerKey),g(e!==a.containerKey)},H=function(){b(!1),g(!1)},A=function(e){k(e),I.emit("done")},P=function(e){var n=e.error;e.emitterKey===a.containerKey&&(b(!1),A(n.toString()))};return i.useEffect((function(){N.current=!0;var e=function e(n,r){window[n]?r():setTimeout((function(){e(n,r)}),500)},n=function(){var n=(0,p.Z)(E().mark((function n(){return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e("ApiSession",(function(){N.current&&(I.on("running",T),I.on("done",H),I.on("executionError",P),g(!1))}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){N.current=!1,I.removeListener("running",T),I.removeListener("done",H),I.removeListener("executionError",P)}}),[a.categoryKey]),i.createElement(i.Fragment,null,i.createElement(L.nu,{code:u.replace(/\n$/,""),scope:R,transformCode:function(e){return S?function(e,n){return"  \n        const originalApiSession = ApiSession.default;\n        const originalLogger = console.log;\n        \n        const argToLogResult = (_arg) => {\n            try{\n                if(_arg.logLevel){\n                    return {\n                        logLevel: _arg.logLevel,\n                        message: _arg.message\n                    }\n                }else{\n                    let _parsed = _arg.toString();\n                    \n                    if(_arg._isBigNumber){\n                        _parsed += ' (BigNumber)';    \n                    }\n                    \n                    return _parsed\n                }\n            }catch (e) {\n              console.error(e)\n            }\n        }\n        \n        const argToStringMapping = _arg => {\n            if(!_arg){\n                 return null;   \n            }\n            \n            if(typeof _arg === 'string'){\n                return _arg;\n            } else{\n                return argToLogResult(_arg);\n            }\n        }\n        \n        const addEventListeners = (_logger) => {\n            _logger.addListener('debug', (message) => logListenerHandler('debug', message))\n            _logger.addListener('error', (message) => logListenerHandler('error', message))\n            _logger.addListener('info', (message) => logListenerHandler('info', message))\n            _logger.addListener('warn', (message) => logListenerHandler('warn', message))\n        }\n        \n        const removeEventListeners = (_logger) => {\n            _logger.removeListener('debug', logListenerHandler);\n            _logger.removeListener('error', logListenerHandler);\n            _logger.removeListener('info', logListenerHandler);\n            _logger.removeListener('warn', logListenerHandler);\n        }\n        \n        const logListenerHandler = (logLevel, message) => console.log({logLevel, message}); \n        \n        ApiSession = {\n            ...ApiSession,\n            default: (...args) => {\n                return originalApiSession(...args).then(({session, controller}) => {\n                    if(!window.originalStratoSession) {\n                        window.originalStratoSession = session;\n                        addEventListeners(session.log);\n                    }\n                    \n                    return {session, controller};\n                })\n            }\n        }\n    \n        let logs = [];\n        console.log = (...args) => {\n            if(Array.isArray(args)) {\n                args = args\n                .map(argToStringMapping)\n                .filter(Boolean)\n        \n                logs = [...logs, ...args]\n            }else{\n                if(!args) return;\n                const log = argToLogResult(args);\n\n                logs = [...logs, log]\n            }\n            \n            const LogLevelBadge = ({text}) => {\n                const itemStyle = '"+m+"';\n                const badgeStyle = itemStyle.replace(itemStyle.substring(0, itemStyle.indexOf('_')), text);\n                \n                return <span className={itemStyle + ' ' + badgeStyle}>{text}</span>\n            }\n            \n            render(<div className={'"+d+"'}>\n                {logs.map((log, index) => {\n                    { \n                        return log.logLevel \n                            ? <p key={index} className={ `"+(0,x.Z)(m,v)+"` }>\n                                    <LogLevelBadge text={log.logLevel}/> - {log.message}\n                              </p>\n                            : <p key={index} className={ `"+(0,x.Z)(m,f)+"` }>{log}</p>\n                    }\n                })}\n            </div>) \n        };\n \n        (async function () {\n            render(<Loader/>); \n            \n            try{\n                 "+e+"\n            }catch (error) {\n                console.log(null) //in case of error, clear the current logs result\n                console.error(error); // also display the error on the console for easy debugging\n                \n                liveEventEmitter.emit('executionError', {\n                    error: error,\n                    emitterKey: '"+n+"' \n                });\n            }\n            \n            if(window.originalStratoSession) {\n                removeEventListeners(originalStratoSession.log);\n                originalStratoSession = null;\n            }\n            \n            console.log = originalLogger;\n            liveEventEmitter.emit('done');\n        })();\n    "}(e,a.containerKey):"render(null)"},theme:Z,noInline:!0,disabled:s},i.createElement(K,(0,t.Z)({hasTopPosition:"top"===r,isRunning:S,onRunAction:function(){return I.emit("running",a.containerKey)},onChange:_,disabled:s,error:w,errorCallback:A},a))))};var F=["children"];function M(e){var n=e.children,r=(0,o.Z)(e,F),s=(0,a.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,g=r.metastring.split(" ").reduce((function(e,n){var r=n.split("="),t=r[0],o=r[1];return e[t]=o,e}),{});return i.createElement("div",{className:l},i.createElement(O,(0,t.Z)({playgroundPosition:s},g),n))}},58603:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(67294);const o=Object.assign({React:t},t)}}]);
const EventMap = new Map( );

const EventManager = {}

EventManager.setEventListener = function(key, type, method, target = document) {
    target.addEventListener(type, method);
    EventMap.set(key, {target: target, type: type, method: method});
}

EventManager.removeEventListener = function(key) {
    const group = EventMap.get(key);
    group.target.removeEventListener(group.type, group.method);
}

EventManager.signal = function(type, details, source = document) {
    source.dispatchEvent(new CustomEvent(type, {detail: detail}));
}

window.EventManager = EventManager;
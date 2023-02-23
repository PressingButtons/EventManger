# EventManagerJS

Event managment javascript Object 

Creates a global (within window) object for event management options. 

The Eventmanger at its core, is a wrapped `Map` object with several external methods to manage event-method pairs.

## Install

Either anchor to a script tag in your html or import the library as a module in one of your module ready javascript(s);
[Best if imported first to ensure all subsequent files can use the object from the start].

### Getting Started 

The **EventManager** Global Object has two functions for managing events 

***setEventListener***
`EventManger.setEventListener(key, type, method, target = document)`
*key*: An alphanumeric identifier that will be used to reference the listener entry. 
*type*: The event type of what to listen for (e.g mousedown);
*method*: The listener function
*target*: What object is listening for the event type, defaults to document. 

This method will enable listeners and inject their build into the `EventManager EventMap`. 
The EventMap is a private Map object, the user **cannot** directly access the EventMap.

***removeEventListener***
`EventManger.removeEventListener(key)`
*key*: The alphanumeric identifier for a mapped eventlistener.

Unbinds the associated object of the event listener and function pair. 
Deletes the reference from the `EventMap`

The `EventManager` also provides a signalling function to dispatch `CustomEvents` from any source.

**sigal**
`EventManager.signal(type, details, source = document)`
*type*: The event type to be dispatched 
*details*: The detail of the `CustomEvent.detail` object. Data to come with emmission.
*source*: The object that will dispatch the event, defaults to document.
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    const listeners = this.events.get(event) || new Set();
    listeners.add(cb);
    this.events.set(event, listeners);

    return {
      unsubscribe: () => {
        if (!this.events.has(event)) return;

        this.events.get(event).delete(cb);
        // To prevent memory leak, delete the event from Map if it's empty.
        if (this.events.get(event).size === 0) {
          this.events.delete(event);
        }
      },
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) return [];

    const result = [];
    this.events.get(event).forEach((cb) => result.push(cb(...args)));
    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

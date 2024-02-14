/**
 * Call the passed function in a try-catch, and return the output wrapped in a state object.
 *
 * This is needed as isolated-vm doesn't allow the isolate to catch errors that are thrown in the
 * host. Instead, we'll wrap the output in a known shape which allows the isolated sdk context to
 * re-throw the error in the correct context
 */
export function wrap(util) {
    return async (...args) => {
        try {
            return { result: await util(...args), error: false };
        }
        catch (e) {
            return { result: e, error: true };
        }
    };
}

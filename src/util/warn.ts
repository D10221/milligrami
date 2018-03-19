const warn = (...args: any[]) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
        console.warn(args);
    }
};
export default warn;
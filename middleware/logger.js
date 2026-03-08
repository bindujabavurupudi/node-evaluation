const logger = (req, res, next) => {
    comsole.log(`Request: ${req.method} ${req.url}`);
    next();
};
modules.exports = logger;
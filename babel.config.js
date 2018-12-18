module.exports = {
    presets: ["babel-preset-expo"],
    "env": {
        "development": {
            "plugins": ["transform-object-rest-spread", "transform-react-jsx-source", "@babel/plugin-proposal-class-properties"]
        }
    }
};
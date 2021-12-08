require('@babel/register')
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['transform-react-pug'],
}

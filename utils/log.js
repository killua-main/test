const chalk = require('chalk');
module.exports = (data, option) => {
  const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
  const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
  const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#FF7F50")('[ 𓆩 Lỗi 𓆪 ] ◇ ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")('[ 𓆩 Lỗi 𓆪 ] ◇ ') + data);
      break;
      case "load":
      console.log(color_one('[ 𓆩 Vtoan 𓆪 ] ◇ ') + color_two(data));
      break;
    default:
      console.log(color_one(`[ 𓆩 Vtoan 𓆪 ] ◇ `) + color_two(data));
      break;
  }
}

module.exports.loader = (data, option) => {
  const arrayColor = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
  const color_one = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
  const color_two = chalk[arrayColor[Math.floor(Math.random() * arrayColor.length)]]
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex("#FF0000")('[ 𓆩 Vtoan 𓆪 ] ◇ ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#FF0000")('[ 𓆩 Vtoan 𓆪 ] ◇ ') + data);
      break;
    default:
      console.log(color_one(`[ 𓆩 Vtoan 𓆪 ] ◇ `) + color_two(data));
      break;
  }
}
module.exports.banner = (data) => {
  const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
  const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
  console.log(color(data));
}
import chalk from 'chalk';

// 输出信息
export default ({
    type,
    title,
    content,
  }: {
    type: string;
    title?: string;
    content?: string;
  }) => {
    const prefixTime = (num: number) => {
      return num < 10 ? `0${num}` : `${num}`;
    };
    const date = new Date();
    const [hours, minutes, seconds] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    const notimp = `${prefixTime(hours)}:${prefixTime(minutes)}:${prefixTime(
      seconds
    )}`;
    const flag = `${chalk.gray(notimp)} ${chalk.bold.cyanBright(`[${type}]`)}`;
    console.log(
      chalk.white(`${flag} ${title}:`, `${chalk.underline.yellowBright(`${content}`)}`)
    );
  };
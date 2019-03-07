This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## need
总体目标是实现一个可以自我评价、教师评价和组员互评的教学评价系统。系统有两类用户 教师 和 学生 ，登录后系统根据不同角色显示不同的功能模块，具体如下：

教师

布置作业：教师可以在此模块中布置作业，输入数据包括选择班级(支持多选)、起始日期、截止日期，输入作业标题和作业内容；
查询作业：教师可以在此模块中查看自己布置的所有作业，支持查询、导出、分页功能；
评价清单：此模块列出所有需要教师评价的作业，要求显示 作业标题、姓名、学号、分数、PPT、Word、Video；
评价详情：教师根据评分标准对该作业进行打分；
评价结果：以 列表 和 卡片 两种模块显示学生的最终成绩，要求显示 作业标题、姓名、学号、分数、教师评分、自我评价和同学评分；
评价统计：以图表方式显示每个作业的统计结果；
管理班级：新建班级，并且通过 Excel 模块导入学生数据；
管理标准：编辑评分标准，建立评分大类和小类，并且针对不同类别设置评分数量；
管理权重：可以修改老师评价、自我评价和同学互评的不同比例；
修改密码：可以修改自己的登录密码；
学生

完成作业：学生可以在此模块完成作业，针对教师布置的任务，上传三类文档 PPT(课件)、Word(内容)和Video(慕课)，传完可以保存当前的进度，直- 到点击提交；提交后不能修改上传的作业内容；
查询作业：学生可以查询自己完成的所有作业，支持按 标题、日期查询；
评价清单：同教师
评价详情：同教师
评价结果：可以查看自己完成作业的最终结果，包括该作业在全班的排名；
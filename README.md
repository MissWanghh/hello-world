1.npm init -y ��ʼ����Ŀ

#### ��װ��Ŀ����

3��npm install --save vue Ĭ�ϰ�װ���°�vue

4��npm install --save-dev webpack webpack-dev-server ��װwebpack��webpack-dev-server����һ��С�͵�Node.js Express��������

#### *��չ��
npm install �ڰ�װ npm ��ʱ������������������԰����ǵ���Ϣд�� package.json �ļ���
һ����npm install --save ��һ���� npm install --save-dev��
���Ǳ����ϵ�������--save ���������������ӵ� package.json �ļ� dependencies ���£�
--save-dev ����ӵ� package.json �ļ� devDependencies ���£�
--save-dev ���㿪��ʱ�������Ķ�����--save ���㷢��֮�������Ķ�����*

5��npm install --save-dev babel-core babel-loader babel-preset-es2015 ��װbabel��babel�������ǽ�es6���﷨������������ʶ���﷨es5

6��npm install --save-dev vue-loader vue-template-compiler ��������vue�������.vue��׺���ļ�

7��npm install --save-dev css-loader style-loader ��������css

��չ��css-loader �� style-loader�����ߴ��������ͬ��css-loaderʹ���ܹ�ʹ������@import �� url(��)�ķ���ʵ�� 
require()�Ĺ���,style-loader�����еļ�������ʽ����ҳ���У����������һ��ʹ���ܹ�����ʽ��Ƕ��webpack������JS�ļ��С�

8��npm install --save-dev url-loader file-loader ���ڴ���ļ���ͼƬ

9��npm install --save-dev sass-loader node-sass ���ڱ���sass

10��npm install --save-dev vue-router ��װ·��



---
##### �༭��ĿĿ¼�Լ���Ӵ���

dist�ļ��Ǻ���ִ��webpackָ�������ģ����ùܣ�

webpack.config.js �����ļ�������Ҳ��һ����׼��Commonjs�淶��ģ�飻

routes.js�ļ���·�������ļ���

index.html��ҳ����ļ�

App.vue����Ŀ����ļ���

main.js������Ŀ�ĺ����ļ���ȫ�ֵ����ö�������ļ��������á�

commponentsĿ¼������˹������header�ļ���

views�ļ�������ҳ�棻

views/views_children  ��·�����



##### ��Ŀ������
```
# ��װ
npm install 
# ִ��
webpack-dev-server
```

����������ɵ����ӣ�����������http://localhost:8080




��package.json��������һ�����е�����,npm֧���Զ���һЩ����

```
"scripts": {
  "start": "webpack-dev-server --hot --inline"
},
```

�����ʹ�ã� npm start  ,�������������http://localhost:8080 ���ɷ���

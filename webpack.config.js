const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
MiniCssExtractPlugin
module.exports={ 
  entry:{
    main:"./src/index.js",
  },
    output:{
    /* filename:"[name].[chunkhash].js", */
  },
    module:{
        rules:[
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                },
              },
            {
                test: /\.html$/i,
                use: [
                  {
                    loader: "html-loader",
                    options: {
                      minimize: true,
                    },
                  },
                ],
              },
           {
            test: /\.css$/i,
             use: [MiniCssExtractPlugin.loader, "css-loader"], 
            // use: [
            //   {
            //     loader: MiniCssExtractPlugin.loader,
            //     options: {
            //       publicPath: "./",
            //     },
            //   },
            //   "css-loader",
            // ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|webp)$/i,
          use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"],
        }, 
    ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
          
          }),
        new MiniCssExtractPlugin(),
    ],
}
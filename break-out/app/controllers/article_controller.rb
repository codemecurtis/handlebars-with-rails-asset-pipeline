class ArticleController < ApplicationController
  def index
  	@articles = Article.all
  	@article = Article.new
    @comment = Comment.new

  end

  def create
  	@articles = Article.all
  	article = Article.new(article_params)
  	if article.save!
  		render json: article
  	else
  		render 'index'
  	end
  end

  def delete
  end

  private
  def article_params
  	params.require(:article).permit(:title, :content)
  end
end

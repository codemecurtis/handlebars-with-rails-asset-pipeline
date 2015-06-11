class CommentsController < ApplicationController
  def create
  	@comment = Comment.new(comment_params)

    if @comment.save!
      redirect_to '/'
    else
      render 'index'
    end
  end

  def delete
  	comment = Comment.find(params[:id])
  end

  private
  def comment_params 
  	params.require(:comment).permit(:content).merge(article_id: params[:article_id])
  end
end

class AddForeginKeyToComments < ActiveRecord::Migration
  def change
  	add_reference :comments, :article
  end
end

class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :created_at

  belongs_to :user
end

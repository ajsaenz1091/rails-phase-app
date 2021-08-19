class Post < ApplicationRecord
    has_many :comments
    belongs_to :user

    validates :title, presence: true
    # validates :title, length: { minimum: 5 }
    validates :content, presence: true
    validates :content, length: { minimum: 10 }
end

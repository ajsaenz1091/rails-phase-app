class Post < ApplicationRecord
    has_many :comments

    validates :title, presence: true
    # validates :title, length: { minimum: 5 }
    validates :content, presence: true
    validates :content, length: { minimum: 10 }
end

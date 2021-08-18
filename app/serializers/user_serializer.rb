class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :possword_digest
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :password, :password_digest
end

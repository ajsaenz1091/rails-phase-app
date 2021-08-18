class PostsController < ApplicationController
     # GET /posts
     def index
        posts = Post.all 
        render json: posts 
    end

    # GET /posts/:id
    def show
        post = find_post
        render json: { post: post }
    end

    # POST /posts
    def create
        if session[:user_id]
            post = Post.create(post_params)
            post.update!(user_id: session[:user_id])
            render json: { post: post }, status: :created
        else
            render json: { errors: ["You must be logged in to create a post"] }, status: :unauthorized
        end
    end


    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :content)
    end

end

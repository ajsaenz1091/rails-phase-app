class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def authorize
        if !session[:user_id]
            render json: { errors: ["Not Authorized"] }, status: :unauthorized
        else
            @current_user = User.find(session[:user_id])
        end 
    end
end

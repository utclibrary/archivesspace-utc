Rails.application.config.after_initialize do
  class RequestsController <  ApplicationController
    skip_before_action :verify_authenticity_token
  end
end

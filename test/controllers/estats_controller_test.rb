require 'test_helper'

class EstatsControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get estats_update_url
    assert_response :success
  end

end

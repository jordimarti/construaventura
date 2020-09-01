require 'test_helper'

class PuntuacionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get puntuacions_index_url
    assert_response :success
  end

end

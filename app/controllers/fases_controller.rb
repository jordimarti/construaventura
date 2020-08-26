class FasesController < ApplicationController
  
  def canvi_fase
    @estat = Estat.find(1)
  	ActionCable.server.broadcast "stage_channel", stage_id: params[:fase]
  end
end

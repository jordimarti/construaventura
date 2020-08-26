class EstatsController < ApplicationController

  def obrir
    @estat = Estat.find(1)
    @estat.obert = true
    @estat.save
    redirect_to fases_canvi_fase_path
  end

  def tancar
    @estat = Estat.find(1)
    @estat.obert = false
    @estat.save
    redirect_to fases_canvi_fase_path
  end

end

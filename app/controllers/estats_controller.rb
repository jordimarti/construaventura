class EstatsController < ApplicationController
  before_action :set_estat, only: [:update]
  def update
    @estat.update(estat_params)
    redirect_to fases_canvi_fase_path
  end

  private
    def set_estat
      @estat = Estat.find(1)
    end

    def estat_params
      params.require(:estat).permit(:obert, :anunci)
    end
end

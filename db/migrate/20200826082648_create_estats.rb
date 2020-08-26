class CreateEstats < ActiveRecord::Migration[6.0]
  def change
    create_table :estats do |t|
      t.boolean :obert
      t.text :anunci

      t.timestamps
    end
  end
end

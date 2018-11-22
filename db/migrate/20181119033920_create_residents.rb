class CreateResidents < ActiveRecord::Migration[5.2]
  def change
    create_table :residents do |t|
      t.text :first_name
      t.text :last_name
      t.references :room, foreign_key: true

      t.timestamps
    end
  end
end

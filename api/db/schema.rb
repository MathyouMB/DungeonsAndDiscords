# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200409020557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.string "name"
    t.float "damage"
    t.float "magic_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "biome_enemies", force: :cascade do |t|
    t.float "spawn_chance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "biome_id"
    t.bigint "enemy_id"
    t.index ["biome_id"], name: "index_biome_enemies_on_biome_id"
    t.index ["enemy_id"], name: "index_biome_enemies_on_enemy_id"
  end

  create_table "biomes", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "character_items", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "item_id"
    t.index ["character_id"], name: "index_character_items_on_character_id"
    t.index ["item_id"], name: "index_character_items_on_item_id"
  end

  create_table "characters", force: :cascade do |t|
    t.float "max_health"
    t.float "max_magic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "current_enemies", force: :cascade do |t|
    t.float "health"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "game_id"
    t.bigint "enemy_id"
    t.index ["enemy_id"], name: "index_current_enemies_on_enemy_id"
    t.index ["game_id"], name: "index_current_enemies_on_game_id"
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.float "max_health"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "enemy_abilities", force: :cascade do |t|
    t.float "use_probability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "enemy_id"
    t.bigint "ability_id"
    t.index ["ability_id"], name: "index_enemy_abilities_on_ability_id"
    t.index ["enemy_id"], name: "index_enemy_abilities_on_enemy_id"
  end

  create_table "enemy_items", force: :cascade do |t|
    t.float "drop_chance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "enemy_id"
    t.bigint "item_id"
    t.index ["enemy_id"], name: "index_enemy_items_on_enemy_id"
    t.index ["item_id"], name: "index_enemy_items_on_item_id"
  end

  create_table "game_characters", force: :cascade do |t|
    t.float "health"
    t.float "magic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "game_id"
    t.bigint "character_id"
    t.bigint "next_player_id"
    t.bigint "previous_player_id"
    t.index ["character_id"], name: "index_game_characters_on_character_id"
    t.index ["game_id"], name: "index_game_characters_on_game_id"
    t.index ["next_player_id"], name: "index_game_characters_on_next_player_id"
    t.index ["previous_player_id"], name: "index_game_characters_on_previous_player_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "discord_channel_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "tile_id"
    t.bigint "owner_id"
    t.bigint "current_player_id"
    t.index ["current_player_id"], name: "index_games_on_current_player_id"
    t.index ["owner_id"], name: "index_games_on_owner_id"
    t.index ["tile_id"], name: "index_games_on_tile_id"
  end

  create_table "item_abilities", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "item_id"
    t.bigint "ability_id"
    t.index ["ability_id"], name: "index_item_abilities_on_ability_id"
    t.index ["item_id"], name: "index_item_abilities_on_item_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tiles", force: :cascade do |t|
    t.integer "location_x"
    t.integer "location_y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "biome_id"
    t.index ["biome_id"], name: "index_tiles_on_biome_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "discord_id"
    t.string "discord_username"
    t.string "discord_discriminator"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "biome_enemies", "biomes"
  add_foreign_key "biome_enemies", "enemies"
  add_foreign_key "character_items", "characters"
  add_foreign_key "character_items", "items"
  add_foreign_key "characters", "users"
  add_foreign_key "current_enemies", "enemies"
  add_foreign_key "current_enemies", "games"
  add_foreign_key "enemy_abilities", "abilities"
  add_foreign_key "enemy_abilities", "enemies"
  add_foreign_key "enemy_items", "enemies"
  add_foreign_key "enemy_items", "items"
  add_foreign_key "game_characters", "characters"
  add_foreign_key "game_characters", "games"
  add_foreign_key "games", "tiles"
  add_foreign_key "item_abilities", "abilities"
  add_foreign_key "item_abilities", "items"
  add_foreign_key "tiles", "biomes"
end

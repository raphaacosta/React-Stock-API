'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('name').notNullable();
      table.integer('amount').notNullable();
      table.decimal('value').notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema

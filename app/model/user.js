'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    news_id: { type: Number, unique: true, dropDups: true },
    url: String,
    thumbnail: String,
    title: String,
  });
  return mongoose.model('zh_top', UserSchema);
};

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export default PrepTasks = new Mongo.Collection('prepTasks');

Meteor.methods({
  'prepTasks.insert'(task) {
    if (!this.userId) {
      throw new Meteor.Error('Not Authorized');
    }

    new SimpleSchema({
      name: {
        type: String
      },
      userId: {
        type: String
      },
      category: {
        type: String,
        allowedValues: ['Protein', 'Salad', 'Sauces']
      },
      priority: {
        type: String
      },
      dueDate: {
        type: Date
      },
      shift: {
        type: String,
        allowedValues: ['AM', 'PM']
      },
      description: {
        type: String
      },
      createdAt: {
        type: Date
      },
      complete: {
        type: Boolean
      },
      completedAt: {
        type: Date
      }
    }).validate({ ...task });

    PrepTasks.insert({ ...task });
  }
})
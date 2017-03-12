import Vue from 'vue'
Vue.use(require('vue-model'))

export default {
  // The key that contains vue-model API
  apiKey: '$',

  // Any keys we don't want to send up to the server
  // or apply from the server. Often, this can be
  // used for related models, etc.
  excludeKeys: [],

  // Prepended to each of the action routes
  baseRoute: '',

  // Prepended to each event that gets emitted. If
  // you leave this blank when your register your
  // models, vue-model will set eventPrefix equal
  // to the `type` that you registered. Event
  // naming schema: {eventPrefix}.{action}.{status}
  // Eg: "customer.fetch.success"
  eventPrefix: '',

  // The function that emits events. You can pass
  // a string name of one of the Vue.js instance
  // event methods here and vue-model will convert
  // it to a proper function using the Vue instance
  // from which you instantiated the model.
  // Allowed: 'emit', 'broadcast', 'dispatch', or
  // a callback function.
  emitter: 'emit',

  // Prevent an action from being invoked while
  // another action is still running
  preventSimultaneousActions: true,

  // Default HTTP Actions that every model gets
  actions: {
    list: {
      method: 'GET',
      route: '',
      pipeline: function (DataPipeline) {
        DataPipeline.none()
      }
    },
    create: {
      method: 'POST',
      route: ''
    },
    fetch: {
      method: 'GET',
      route: '/{id}',
      apply: true,
      pipeline: function (DataPipeline) {
        DataPipeline.none()
      }
    },
    update: {
      method: 'PUT',
      route: '/{id}',
      apply: true
    },
    destroy: {
      method: 'DELETE',
      route: '/{id}',
      pipeline: function (DataPipeline) {
        DataPipeline.none()
      }
    }
  },
  // Base defaults for every action
  actionDefaults: {
    // Apply data that's returned
    // from the server
    apply: false,

    // Load validation errors into the
    // model if the server returns them
    validation: true,

    // Perform before the action. Return
    // false to cancel the action
    before: function () {
    //
    },

    // Perform after the action completes
    after: function (data) {
      //
    }
  },

  // Model validation errors coming from the server
  validationErrors: {
    // Function to determine whether or not an
    // error response is a validation error.
    // 422 is the correct status code, so if
    // you use Laravel, no need to update this.
    isValidationError: function (xhr) {
      return xhr.status === 422
    },

    // The error object should have the field names
    // as the keys and an array of errors as the
    // values. Laravel does this automatically.
    transformResponse: function (xhr) {
      return xhr.responseJSON
    }
  }
}

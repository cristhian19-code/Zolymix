<template>
  <div
    data-aos="fade-up"
    class="toast show rounded p-2 comment"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header">
      <strong class="me-auto"
        >{{ name }}<br />
        <span class="text-lighter">{{ range }}</span>
      </strong>
      <img
        class="avatar-user"
        src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
    <div class="toast-body">
      {{ comment }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    range: {
      type: String,
    },
    comment: {
      type: String,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.avatar-user {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>
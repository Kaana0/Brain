<template>
<div>
<ul v-for="item in items" :key="item">
    <li>{{ item.created_at | moment }}</li>
</ul>
</div>
</template>

<script>
import moment from 'moment';
export default {
    filters: {
        moment: function (date) {
            return moment(date).format('YYYY/MM/DD HH:mm');
        }
    }
}
</script>
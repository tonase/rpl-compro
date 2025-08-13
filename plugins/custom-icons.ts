import { mdi } from "vuetify/iconsets/mdi";
import ChevronDown from "~/components/icon/ChevronDown.vue";
import ChevronUp from "~/components/icon/ChevronUp.vue";
import Close from "~/components/icon/Close.vue";
import Email from "~/components/icon/Email.vue";
import Phone from "~/components/icon/Phone.vue";

const customSvgNameToComponent: any = {
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  close: Close,
  email: Email,
  phone: Phone,
};

const custom = {
  component: (props: any) =>
    h(props.tag, [
      h(customSvgNameToComponent[props.icon as string], {
        class: "v-icon__svg",
      }),
    ]),
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vuetify:before-create", ({ vuetifyOptions }) => {
    vuetifyOptions.icons = {
      defaultSet: "mdi",
      sets: {
        mdi,
        custom,
      },
    };
  });
});

<template>
  <div class="bg-white p-mobile">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" class="text-center">
        <div class="text-h5 text-sm-h3 text-primary mb-4">Get in touch</div>

        <div class="text-sm-h6 text-neutralSecondary mb-8">
          Send us your inquiry and we’ll get back to you soon!
        </div>

        <v-row no-gutters justify="center">
          <v-col cols="12" sm="10">
            <v-row no-gutters class="gr-5 mb-5">
              <v-col cols="12" sm="6" class="pr-sm-5">
                <base-text-field
                  color="primary"
                  placeholder="Enter your name"
                ></base-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <base-text-field
                  color="primary"
                  placeholder="Enter email address"
                ></base-text-field>
              </v-col>

              <v-col cols="12">
                <base-text-field
                  color="primary"
                  placeholder="Enter your inquiry subject"
                ></base-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  placeholder="Enter your message"
                  color="primary"
                  variant="outlined"
                  hide-details="auto"
                  class="custom-input"
                ></v-textarea>
              </v-col>
            </v-row>

            <div class="d-flex justify-center">
              <base-btn
                color="secondary"
                width="187"
                height="47"
                class="text-white font-weight-semibold"
              >
                Submit
              </base-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<template>
    <v-container grid-list-md text-xs-center>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                   
                    <v-form>
                        <v-list-title><br>Login</v-list-title>
                        <v-container fluid>
                          <v-layout row wrap>
                            <v-flex xs12 sm12>
                              <v-text-field label="Código do usuário:"></v-text-field>
                              <v-text-field
                                v-model="password"
                                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                                :rules="[rules.required, rules.min]"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Senha"
                                hint="At least 8 characters"
                                counter
                                @click:append="show1 = !show1"
                              ></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-form>
                      <v-btn color="success">Entrar</v-btn>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
      data () {
        return {
          show1: false,
          show2: true,
          show3: false,
          show4: false,
          password: '',
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match')
          }
        }
      }
    }
  </script>

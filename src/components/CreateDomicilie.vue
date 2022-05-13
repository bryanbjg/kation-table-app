<template>
    <v-row>
        <v-dialog v-model="show" persintent>

            <v-card>

                <v-card-title>
                    <span class="text-h5">Crear Domicilio:</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-select :items="domicilieTypeItems" label="Tipo Domicilio" required
                                    @change="(value) => onSelectDomicilieType(value)">
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select :items="stateTypeItems" label="Estado" required @change="onSelectState">
                                </v-select>
                            </v-col>


                            <v-col cols="12">
                                <v-text-field v-model="model.street" label="Calle" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="model.sector" label="Sector" persinstent-hint required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="model.number" label="Numero" hint="Ejemplo: #10" persinstent-hint
                                    required>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="model.province" label="Provincia" persinstent-hint required>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*Indican campos obligatorios</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="show = false">
                        Cerrar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="onSave">
                        Guardar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

export default {
    name: "CreateDomicilie",
    props: ['visible'],
    data: () => ({
        model: {
            domicilieType: "",
            street: "",
            number: "",
            sector: "",
            province: "",
            state: "",
        },
        domicilieTypeItems: ['Oficina', 'Sucursal', 'Trabjo', 'Verano'],

        stateTypeItems: ['Activo', 'Inactivo'],
    }),

    methods: {
        onSelectDomicilieType(value) {
            this.model.domicilieType = value;
        },

        onSelectState(value) {
            this.model.state = value;
        },

        onSave() {

            console.log(this.model);
            this.$emit('onSave', { ...this.model });


        }


    },

    computed: {
        show: {
            get() {
                return this.visible
            },
            set(value) {
                if (!value) {
                    this.$emit('close', false);
                }
            }
        }
    }
}
</script>
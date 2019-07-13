import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  foto: any;

  constructor(private camera: Camera) { }

  capturarFoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }).then(dataImagen => {
      this.foto = `data:image/jpeg;base64,${dataImagen}`;
    });
  }
  buscarFoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }).then(dataImagen => {
      this.foto = `data:image/jpeg;base64,${dataImagen}`;
    });
  }
}

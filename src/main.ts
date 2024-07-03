import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.port 
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("ToDo")
    .setDescription(`
      Документация к api.
    `)
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup("/api/docs", app, document)

  await app.listen(port, ()=>{
    console.log(`Server started on ${port} port!`)
  });
}
bootstrap();

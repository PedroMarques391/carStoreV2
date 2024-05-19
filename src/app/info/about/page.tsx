"use client"
import Container from '@/components/Container/Container'
import Metadata from '@/components/Utils/Metadata'
import React from 'react'

const About = (): React.JSX.Element => {
  return (
    <>
    <Metadata seoTitle='carStore | Sobre Nós' seoDescription='carStore - Informações sobre a carStore' />
      <div className='bg-carStoreAboutMobile lg:bg-carStoreAbout bg-cover w-full h-60 sm:h-96' />
      <Container>
        <main className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
          <section className='w-full flex flex-col gap-5'>
            <div>
              <h1 className='text-2xl font-bold mb-3'>Nossa <span className='text-red-600'>História</span></h1>
              <p>Fundada em 2010, a carStore nasceu com o objetivo de proporcionar uma experiência única e diferenciada no mercado automotivo. Localizada no coração de Bélem, somos uma empresa que preza pela qualidade, confiança e satisfação de nossos clientes.
              </p>
            </div>

            <div>
              <h1 className='text-2xl font-bold mb-3'>Nossa <span className='text-red-600'>Visão</span></h1>
              <p>Ser a principal escolha dos consumidores na hora de adquirir um veículo, destacando-se pela transparência, qualidade e dedicação ao cliente.
              </p>
            </div>

            <div>
              <h1 className='text-2xl font-bold mb-3'>Nossa <span className='text-red-600'>Equipe</span></h1>
              <p>Contamos com uma equipe dedicada de 7 vendedores, todos altamente capacitados e comprometidos em oferecer um atendimento personalizado e atencioso. Nosso time está sempre pronto para ajudar você a encontrar o carro dos seus sonhos, proporcionando um atendimento que vai além da simples venda, mas que busca entender e atender às suas necessidades específicas.
              </p>
            </div>

            <div>
              <h1 className='text-2xl font-bold mb-3'>Responsabilidade <span className='text-red-600'>Social</span></h1>
              <p>Acreditamos no poder de contribuir para uma sociedade melhor. Por isso, apoiamos diversas iniciativas sociais e ambientais em nossa comunidade, buscando sempre fazer a diferença e promover um impacto positivo.
              </p>
            </div>
          </section>

          <section className='w-full flex flex-col gap-5'>
            <div>
              <h1 className='text-2xl font-bold mb-3'>Nossos <span className='text-red-600'>Valores</span></h1>
              <ul className='flex flex-col gap-3'>
                <li>
                  <strong>Integridade</strong>: Atuamos com transparência e honestidade em todas as nossas relações, garantindo a confiança e a satisfação de nossos clientes.
                </li>
                <li>
                  <strong>Qualidade</strong>: Oferecemos veículos criteriosamente selecionados, assegurando a procedência e a qualidade de cada carro que disponibilizamos.
                </li>
                <li>
                  <strong>Compromisso</strong>: Oferecemos veículos criteriosamente selecionados, assegurando a procedência e a qualidade de cada carro que disponibilizamos.
                </li>
                <li>
                  <strong>Inovação</strong>: Buscamos constantemente melhorias e inovações que possam agregar valor aos nossos serviços e à experiência dos nossos clientes.
                </li>
              </ul>
            </div>

            <div>
              <h1 className='text-2xl font-bold mb-3'>Nossa <span className='text-red-600'>Missão</span></h1>
              <p>Nossa missão é ser referência no mercado automotivo, oferecendo produtos e serviços de alta qualidade que superem as expectativas dos nossos clientes. Queremos ser reconhecidos pela excelência no atendimento e pela integridade nas nossas relações comerciais.</p>
            </div>
          </section>
        </main>
        <div>
            <h1 className='text-2xl text-center font-bold my-8'>Venha nos Conhecer</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.269124536612!2d-48.497397911192984!3d-1.4514088182834588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e931e2fffff%3A0x4d910e5a217c4c97!2sAv.%20Pres.%20Vargas%2C%20381-2147483647%20-%20Campina%2C%20Bel%C3%A9m%20-%20PA%2C%2066017-000!5e0!3m2!1spt-BR!2sbr!4v1715908569247!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </Container>
    </>
  )
}

export default About
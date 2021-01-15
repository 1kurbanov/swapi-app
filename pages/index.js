import {MainLayout} from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className='d-flex justify-content-center flex-column w-75 m-auto pt-4'>
        <h4>
          Приложение, использующее{' '}
          <a href='https://swapi.dev/' target='_blank'>
            The Star Wars API
          </a>
          , cостоит из двух разделов:
        </h4>
        <ul>
          <li>
            Planets: список Планет (name), по клику — выбор и переход на
            страницу деталей со всеми атрибутами
          </li>
          <li>
            Statistics: статистика киновселенной Звездные войны: актеры, фильмы,
            и тд. по всем ресурсам из root
          </li>
        </ul>
      </div>
    </MainLayout>
  )
}

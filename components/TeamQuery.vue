    <ContentQuery path="/about/team" :where="{ type: 'csv' }" v-slot="{ data }">
      <ul>
        <li v-for="teamMember of team" :key="teamMember.name">
          {{ teamMember.name }}
        </li>
      </ul>
      <template #not-found>
        <p>No team members found.</p>
      </template>
    </ContentQuery>

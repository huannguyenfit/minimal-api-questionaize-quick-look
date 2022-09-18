using System.Reflection;
using AutoMapper;
public static class ServiceCollectionExtension
{
    public static void ConfigureAutoMapper(this IServiceCollection services)
    {
        var typeMappingProfiles = Assembly.GetExecutingAssembly().GetTypes()
            .Where(type => type.BaseType == typeof(Profile));
        var mappingConfig = new MapperConfiguration(mc =>
        {
            foreach (var t in typeMappingProfiles)
            {
                mc.AddProfile(t);
            }
        });
        IMapper mapper = mappingConfig.CreateMapper();
        services.AddSingleton(mapper);
        AutoMapperExtension.Mapper = mapper;
    }
}
